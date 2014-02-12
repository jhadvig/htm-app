# require 'bundler/setup'
# require 'sinatra/base'
# require 'sass'
# require 'haml'
# require 'pry'
require 'sinatra'

class Htm < Sinatra::Base


  get '/' do
    haml :index
  end

  get '/service' do
    haml :service
  end

  get '/projects' do
    haml :projects
  end

  get '/about' do
    haml :about
  end

  get '/contact' do
    haml :contact
  end

  get '*/css/:name.css' do
    content_type 'text/css', :charset => 'utf-8'
    scss(:"/css/#{params[:name]}")
  end

  post '/submit_mail_representative' do
    begin
      send_mail params
    rescue => e
      puts "ERROR: Mail not sent, because of: #{e.message}"
    end
    redirect '/contact'
  end

end

#Htm.run!