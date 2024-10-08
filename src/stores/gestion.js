import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

// Store pour les recettes
export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref([])
  const categories = ref([])
  const loadRecipesAndGroupeByCategory = async () => {
    axios
      .all([
        axios.get('http://localhost:3000/recettes'),
        axios.get('http://localhost:3000/categories')
      ])
      .then(
        axios.spread((resp1, resp2) => {
          const recettes = resp1.data
          const cats = resp2.data
          for (let i = 0; i < cats.length; i++) {
            const categorieRecettes = recettes.filter((r) => r.id_categorie === cats[i].id)
            console.log(categorieRecettes)
            cats[i].recettes = categorieRecettes
          }
          categories.value = cats
          console.log(categories.value)
        })
      )
  }
  const ajoutRecipe = async (recipe) => {
    try {
      await axios.post('http://localhost:3000/recettes', recipe)
      await loadRecipesAndGroupeByCategory()
    } catch (error) {
      console.error("Erreur lors de l'ajout de la recette :", error)
    }
  }

  const updateRecipe = async (id, updatedRecipe) => {
    updatedRecipe = {
      titre: "mise a  nuit",
      ingredient: "test test test",
      type: "Entrée",
      id_categorie: 2
  }
  try {
      const response =  await axios.put(
          `http://localhost:3000/recettes/${id}`,
           updatedRecipe
        )
        console.log('response awa', response.data)
        } catch(erro){
          console.error(erro.messahe)
        }
  }

      
    
  const deleteRecipe = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/recettes/${id}`)
      const resp = await loadRecipesAndGroupeByCategory()
      console.log(resp)
    } catch (error) {}
  }

  return {
    recipes,
    categories,
    ajoutRecipe,
    updateRecipe,
    deleteRecipe,
    loadRecipesAndGroupeByCategory
  }
})

// Store pour les catégories
export const useCategoryStore = defineStore('category', () => {
  const categories = ref([])

  const loadCategoriesFromApi = async () => {
    try {
      const response = await axios.get('http://localhost:3000/categories')
      categories.value = response.data
    } catch (error) {
      console.error('Erreur lors du chargement des catégories :', error)
    }
  }

  const getCategories = () => {
    return categories.value
  }

  const addCategory = async (nom) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/categories',
        nom
      )
      categories.value.push(response.data)
    } catch (error) {
      console.error("Erreur lors de l'ajout de la catégorie :", error)
    }
  }

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/categorie${id}`)
      await this.loadCategoriesFromApi()
    } catch (error) {}
  }

  const updateCategory = async (id, newNom) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/categorie/${id}`,
        { nom: newNom }
      )
      const index = categories.value.findIndex((category) => category.id === id)
      if (index !== -1) {
        categories.value[index] = response.data
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la catégorie :', error)
    }
  }
  const getCategoryNameById = (id) => {
    const category = categories.value.find((cat) => cat.id === id)
    return category ? category.nom : 'Catégorie inconnue'
  }

  return {
    categories,
    loadCategoriesFromApi,
    getCategories,
    addCategory,
    deleteCategory,
    updateCategory,
    getCategoryNameById
  }
})
