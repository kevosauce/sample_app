class StaticPagesController < ApplicationController
  def home
  end

  def automata
  end

  def nothing_poem
  end

  def functional_prog
     pdf_filename = File.join(Rails.root, "app/assets/images/type_calculus.pdf")
     send_file(pdf_filename, :filename => "type_calculus.pdf", :disposition => 'inline', :type => "application/pdf")
  end

  def proton
     pdf_filename = File.join(Rails.root, "app/assets/images/ullmann discovery of the proton.pdf")
     send_file(pdf_filename, :filename => "ullmann discovery of the proton.pdf", :disposition => 'inline', :type => "application/pdf")
  end

  def thesis
     pdf_filename = File.join(Rails.root, "app/assets/images/ullmann ms thesis.pdf")
     send_file(pdf_filename, :filename => "ullmann ms thesis.pdf", :disposition => 'inline', :type => "application/pdf")
  end

end

