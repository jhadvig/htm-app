require 'rubygems'
require 'bundler'
Bundler.require(:default)

require './lib/pony_gmail.rb'

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

      Pony.mail(:to=>'j.hadvig@gmail.com',
                :from => "#{params['mail']}",
                :subject=> "test mail",
                :body => "test body",
                :via_options => {
                  :address => 'smtp.gmail.com',
                  :port => '587',
                  :user_name => 'htm.openshift@gmail.com',
                  :password => 'htm.trade',
                  :authentication => :plain,
                  :domain => 'htmtrade.sk'
                 })


    rescue => e
      puts "ERROR: Mail not sent, because of: #{e.message}"
    end
    redirect '/contact'
  end

end

run Htm