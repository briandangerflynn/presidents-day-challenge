import { api } from './api-helper'

export const getTeamMembers = async teamId => {
  try {
    const response = await api.get(`/teams/${teamId}`);
    return response.data.users;
  } catch (error) {
    console.log(error)
  }
}

export const getTeamPresidents = async teamId => {
  try {
    const response = await api.get(`/teams/${teamId}`);
    return response.data.team_presidents;
  } catch (error) {
    console.log(error)
  }
}

export const makeTeam = async data => {
  try {
    const response = await api.post('/teams', { team: data })
    const currentTeam = response.data
    return currentTeam;
  } catch (error) {
    const errors = []
    if (error.response.data.error.teamname) {
      errors.push(`Teamname ${error.response.data.error.teamname}`)
    }
    if (error.response.data.error.password) {
      errors.push(`Password ${error.response.data.error.password}`)
    }
    const errorMessage = errors[0]
    throw errorMessage
  }
}

export const removeUserFromTeam = async teamId => {
  try {
    const response = await api.get(`teams/${teamId}/leave`)
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export const removeTeam = async teamId => {
  try {
    const response = await api.delete(`teams/${teamId}`)
    return response.data;
  } catch (error) {
    console.log(error)
  }
}