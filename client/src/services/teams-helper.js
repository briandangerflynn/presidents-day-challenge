import { api } from './api-helper'

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
    this.setState({
      errorMessage
    })
  }
}

try {
  const response = await api.post('/teams', { team: formData })
  const currentTeam = response.data
  this.setState({
    currentTeam,
    errorMessage: ""
  })
  this.getTeamPresidents()
  this.getCurrentTeamMembers()
} catch (error) {

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
