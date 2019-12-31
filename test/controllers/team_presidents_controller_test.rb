require 'test_helper'

class TeamPresidentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @team_president = team_presidents(:one)
  end

  test "should get index" do
    get team_presidents_url, as: :json
    assert_response :success
  end

  test "should create team_president" do
    assert_difference('TeamPresident.count') do
      post team_presidents_url, params: { team_president: { president_id: @team_president.president_id, team_id: @team_president.team_id, user_id: @team_president.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show team_president" do
    get team_president_url(@team_president), as: :json
    assert_response :success
  end

  test "should update team_president" do
    patch team_president_url(@team_president), params: { team_president: { president_id: @team_president.president_id, team_id: @team_president.team_id, user_id: @team_president.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy team_president" do
    assert_difference('TeamPresident.count', -1) do
      delete team_president_url(@team_president), as: :json
    end

    assert_response 204
  end
end
