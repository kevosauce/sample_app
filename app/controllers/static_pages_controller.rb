class StaticPagesController < ApplicationController
  def home
  end

  def automata
  end

  def pdf
     pdf_filename = File.join(Rails.root, "app/assets/images/type_calculus.pdf")
     send_file(pdf_filename, :filename => "type_calculus.pdf", :disposition => 'inline', :type => "application/pdf")
  end
end
