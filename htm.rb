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
    name =
    begin
      RestClient.post "https://api:key-6kgjogho9zhv8bjp54ig85gh3cwkz300"\
      "@api.mailgun.net/v2/htmtrade.sk/messages",
      :from => "#{params['mail'].match(/^[^@]*/i).to_s} <#{params['mail']}>",
      :to => "j.hadvig@gmail.com",
      :subject => "#{params['subject']}",
      :text => "#{params['description']}"

    rescue => e
      puts "ERROR: Mail not sent, because of: #{e.message}"
    end
    redirect '/contact'
  end

end

#Htm.run!