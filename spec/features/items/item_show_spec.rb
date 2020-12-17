require 'rails_helper'

describe 'When I visit an items show page' do
  before :all do
    Capybara.current_driver = :selenium
  end

  after :all do
    Capybara.use_default_driver
  end

  it 'I should see the details for that item' do
    item_text = 'Sunt eum id eius magni consequuntur delectus veritatis. Quisquam laborum illo ut ab. Ducimus in est id voluptas autem.'
    visit 'items/4'

    expect(page).to have_css('#item', text: 'Item Nemo Facere')
    expect(page).to have_css('#item', text: 'Price: $42.91')
    expect(page).to have_css('#item', text: item_text)

    expect(page).to have_css('#sold-by', text: 'This Item Sold By: Schroeder-Jerde')
  end
end
