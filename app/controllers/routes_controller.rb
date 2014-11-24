class RoutesController < ApplicationController
	def index
    @monumentos = Monumento.all
	end
end
