require 'dragonfly'
app = Dragonfly[:images]

app.configure_with(:imagemagick)
app.configure_with(:rails)
app.configure_with(:heroku, 'elytra') 
if Rails.env.production?
  app.configure do |c|
    c.datastore = Dragonfly::DataStorage::S3DataStore.new(
      :bucket_name => 'my-bucket-name',
      :access_key_id => ENV['S3_KEY'],
      :secret_access_key => ENV['S3_SECRET']
    )
  end
end
app.define_macro(ActiveRecord::Base, :image_accessor)
