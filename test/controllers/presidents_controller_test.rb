require 'test_helper'

class PresidentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @president = presidents(:one)
  end

  test "should get index" do
    get presidents_url, as: :json
    assert_response :success
  end

  test "should create president" do
    assert_difference('President.count') do
      post presidents_url, params: { president: { alt_one: @president.alt_one, alt_two: @president.alt_two, drink_type: @president.drink_type, image_url: @president.image_url, name: @president.name, presidency: @president.presidency, specific_drink: @president.specific_drink, years_active: @president.years_active } }, as: :json
    end

    assert_response 201
  end

  test "should show president" do
    get president_url(@president), as: :json
    assert_response :success
  end

  test "should update president" do
    patch president_url(@president), params: { president: { alt_one: @president.alt_one, alt_two: @president.alt_two, drink_type: @president.drink_type, image_url: @president.image_url, name: @president.name, presidency: @president.presidency, specific_drink: @president.specific_drink, years_active: @president.years_active } }, as: :json
    assert_response 200
  end

  test "should destroy president" do
    assert_difference('President.count', -1) do
      delete president_url(@president), as: :json
    end

    assert_response 204
  end
end
