class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :cors_set_access_control_headers
  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = request.headers["HTTP_ORIGIN"]
    headers['Access-Control-Allow-Credentials'] = 'true'
  end
end
