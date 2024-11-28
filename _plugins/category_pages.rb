module Jekyll
  class CategoryPage < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category.html')
      self.data['layout'] = 'category'
      self.data['title'] = category
      self.data['category'] = category
    end
  end

  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'category'
        site.categories.each_key do |category|
          category_path = category.gsub('/', '-').downcase
          dir = File.join('blog', 'category', category_path)
          
          site.pages << CategoryPage.new(
            site,
            site.source,
            dir,
            category
          )
        end
      end
    end
  end
end 