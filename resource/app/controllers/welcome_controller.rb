class WelcomeController < ApplicationController
  def index
  end

  def text
    respond_to do |format|
      text = "This is Text"
      format.text {render :text => text}
      format.html {render :text => text}
    end
  end
  def json
    respond_to do |format|
      jjson = {:name=> "Name"}
      format.json {render :json => jjson}
      format.html {render :json => jjson}
    end
  end
end
