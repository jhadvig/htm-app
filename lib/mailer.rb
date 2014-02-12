module PonyMailer

  def send_mail(params)
    Pony.mail(
      :to => ['j.hadvig@gmail.com'],
      :subject => "Mail from #{params['mail']}",
      :body => "#{params['description']}"
    )
  end
end
