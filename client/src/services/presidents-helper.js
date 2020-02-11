import { api } from './api-helper';

export const getPresident = async id => {
  try {
    const response = await api.get(`/presidents/${id}`)
    const currentPresident = response.data
    return currentPresident
  } catch (error) {
    console.log(error)
  }
}

export const getDefeatedPresident = async (teamId, presidentId, data) => {
  try {
    const response = await api.put(`/teams/${teamId}/presidents/${presidentId}/defeat`, data)
    const teamPresident = response.data[0];
    return teamPresident;
  } catch (error) {
    console.log(error)
  }
}

export const getRevivedPresident = async (teamId, presidentId, data) => {
  try {
    const response = await api.put(`/teams/${teamId}/presidents/${presidentId}/revive`, data)
    const teamPresident = response.data[0];
    return teamPresident;
  } catch (error) {
    console.log(error)
  }
}