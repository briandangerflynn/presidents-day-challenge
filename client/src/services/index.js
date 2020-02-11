import {
  makeTeam,
  removeTeam,
  removeUserFromTeam,
  getTeamPresidents,
  getTeamMembers
} from './teams-helper';
import {
  getPresident,
  getDefeatedPresident,
  getRevivedPresident
} from './presidents-helper';

import { login, register, verifyToken, removeToken } from './auth'

export {
  login,
  register,
  verifyToken,
  removeToken,
  makeTeam,
  removeTeam,
  removeUserFromTeam,
  getTeamPresidents,
  getTeamMembers, getPresident,
  getDefeatedPresident,
  getRevivedPresident
}