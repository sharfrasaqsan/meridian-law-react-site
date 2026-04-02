import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowLeft, Clock, Share2, Linkedin, Twitter, ArrowRight, Search, Tag, User } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'
import { insights } from '../data/insights'

// Helper to format date
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function ArticleCard({ article, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-navy-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
    >
      <Link to={`/insights/${article.id}`} className="block relative aspect-[16/10] overflow-hidden">
        <img 
          src={article.image || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800'} 
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors duration-500" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-navy-900 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
            {article.category}
          </span>
        </div>
      </Link>
      
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 mb-4 text-[11px] text-gray-500 font-medium uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-gold-500" />
            {formatDate(article.date || article.created_at)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-gold-500" />
            {article.readTime || article.read_time}
          </span>
        </div>
        
        <h3 className="text-xl font-heading font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors duration-300 leading-tight">
          <Link to={`/insights/${article.id}`}>{article.title}</Link>
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
          {article.excerpt}
        </p>
        
        <Link 
          to={`/insights/${article.id}`}
          className="inline-flex items-center gap-2 text-navy-900 font-bold text-sm group/btn mt-auto"
        >
          Read Full Insight 
          <ArrowRight className="w-4 h-4 text-gold-500 transform group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

function ArticleView() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchArticle() {
      if (!supabase) {
        const local = insights.find((a) => a.id === id)
        setArticle(local || null)
        setLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .single()

        if (error) throw error
        setArticle(data)
      } catch {
        const local = insights.find((a) => a.id === id)
        setArticle(local || null)
      } finally {
        setLoading(false)
      }
    }
    fetchArticle()
    window.scrollTo(0, 0)
  }, [id])

  if (loading) {
    return (
      <div className="pt-40 pb-24 max-w-3xl mx-auto px-4">
        <div className="animate-pulse space-y-8">
          <div className="h-4 bg-gray-200 rounded w-24" />
          <div className="h-12 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="aspect-video bg-gray-200 rounded-2xl" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-3xl font-heading font-bold text-navy-900 mb-6">Article Not Found</h1>
        <Link 
          to="/insights" 
          className="inline-flex items-center gap-2 text-gold-600 font-bold hover:text-navy-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all insights
        </Link>
      </div>
    )
  }

  const relatedInsights = insights.filter(a => a.id !== article.id).slice(0, 2)

  return (
    <>
      <SEO 
        title={`${article.title} — Meridian Law Group Insights`} 
        description={article.excerpt}
        ogType="article"
      />
      
      {/* Article Header */}
      <section className="pt-40 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gold-600 text-xs font-bold uppercase tracking-widest mb-10 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Insights
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-navy-50 text-navy-700 text-[10px] font-bold uppercase tracking-wider rounded-md">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy-900 leading-[1.1] mb-8">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-800">
                   <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Expert Advice by</div>
                  <div className="text-sm font-bold text-navy-900">{article.author || 'Meridian Law Team'}</div>
                </div>
              </div>
              
              <div className="h-8 w-px bg-gray-100 hidden sm:block" />
              
              <div className="flex items-center gap-8 text-[11px] text-gray-500 font-medium uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-gold-500" />
                  {formatDate(article.date || article.created_at)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gold-500" />
                  {article.readTime || article.read_time}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {article.image && (
        <section className="pb-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden aspect-[21/9] shadow-2xl"
            >
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg prose-navy max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-navy-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-navy-900 prose-li:text-gray-600">
            {article.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i}>{line.replace('## ', '')}</h2>
              }
              if (line.startsWith('### ')) {
                return <h3 key={i}>{line.replace('### ', '')}</h3>
              }
              if (line.startsWith('- ')) {
                // List item

                return (
                  <li key={i} className="flex items-start gap-3 mb-2">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2.5 shrink-0" />
                    <span>{line.replace('- ', '').replace(/\*\*/g, '')}</span>
                  </li>
                )
              }
              if (line.match(/^\d+\. /)) {
                return <p key={i} className="font-semibold text-navy-900 mt-6">{line.replace(/^\d+\. /, '')}</p>
              }
              if (line.trim() === '') return <br key={i} />
              
              // Handle bold text in paragraphs
              const segments = line.split(/(\*\*.*?\*\*)/g)
              return (
                <p key={i} className="mb-6">
                  {segments.map((seg, si) => {
                     if (seg.startsWith('**') && seg.endsWith('**')) {
                       return <strong key={si}>{seg.replace(/\*\*/g, '')}</strong>
                     }
                     return seg
                  })}
                </p>
              )
            })}
          </div>
          
          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Share this resource</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-navy-900 hover:text-white transition-all duration-300">
                   <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-navy-900 hover:text-white transition-all duration-300">
                   <Twitter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-navy-900 hover:text-white transition-all duration-300">
                   <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-wider rounded-md">
                <Tag className="w-3 h-3" /> {article.category}
              </span>
              <span className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-wider rounded-md">
                Legal Guide
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Reading */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-heading font-bold text-navy-900">Suggested Reading</h2>
            <Link to="/insights" className="text-gold-600 font-bold text-sm flex items-center gap-2 hover:text-navy-900 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedInsights.map((item, idx) => (
              <ArticleCard key={item.id} article={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Specific Advice?"
        subtitle="Our solicitors are available to discuss how these legal frameworks apply to your unique business situation in the UK."
      />
    </>
  )
}

function FeaturedArticle({ article }) {
  if (!article) return null
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-3xl overflow-hidden bg-navy-900 min-h-[500px] flex items-end mb-20 group"
    >
      <div className="absolute inset-0">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-60 transform group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
      </div>
      
      <div className="relative p-8 sm:p-16 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-gold-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
            Featured Insight
          </span>
          <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
             <Calendar className="w-3 h-3" /> {formatDate(article.date)}
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6 leading-[1.1]">
          {article.title}
        </h2>
        
        <p className="text-navy-100 text-lg mb-8 line-clamp-2 max-w-2xl opacity-90">
          {article.excerpt}
        </p>
        
        <Link 
          to={`/insights/${article.id}`} 
          className="inline-flex items-center gap-3 bg-white text-navy-900 px-8 py-4 rounded-full font-bold transition-all hover:bg-gold-500 hover:text-white"
        >
          Read Detailed Article <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function InsightsPage() {
  const { id } = useParams()
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchArticles() {
      if (!supabase) {
        setArticles(insights)
        setLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setArticles(data && data.length > 0 ? data : insights)
      } catch {
        setArticles(insights)
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [])

  if (id) return <ArticleView />

  const categories = ['All', ...new Set(articles.map(a => a.category))]
  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === activeCategory)
  
  const searchedArticles = filteredArticles.filter(a => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const featuredArticle = articles[0]
  const displayArticles = activeCategory === 'All' && searchTerm === '' 
    ? searchedArticles.slice(1) 
    : searchedArticles

  return (
    <>
      <SEO 
        title="Legal Insights & Global Resources — Meridian Law" 
        description="Practical legal guidance for UK founders and technology leaders. Written by our London-based solicitors to help you scale under English Law."
      />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-px w-10 bg-gold-500" />
                 <span className="text-gold-600 text-xs font-bold uppercase tracking-widest">
                   Expert Legal Commentary
                 </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-navy-900 mb-8 leading-[1.05]">
                Insights & <span className="text-gold-500">Resources</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Critical legal thinking for the next generation of UK technology companies. 
                Staying compliant while scaling fast in the London & Cambridge ecosystems.
              </p>
            </motion.div>
          </div>

          {activeCategory === 'All' && searchTerm === '' && (
            <FeaturedArticle article={featuredArticle} />
          )}

          {/* Filtering */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-16 border-b border-gray-100 pb-10">
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-navy-900 text-white shadow-lg'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative group min-w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-gold-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search legal insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-transparent focus:border-navy-100 focus:bg-white rounded-full py-3.5 pl-12 pr-6 text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-24">
            {loading ? (
              [1, 2, 3].map(i => (
                <div key={i} className="animate-pulse space-y-4">
                  <div className="aspect-[16/10] bg-gray-100 rounded-2xl" />
                  <div className="h-4 bg-gray-100 rounded w-1/4" />
                  <div className="h-6 bg-gray-100 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-full" />
                </div>
              ))
            ) : (
              <AnimatePresence mode="popLayout">
                {displayArticles.map((article, idx) => (
                  <ArticleCard key={article.id} article={article} index={idx} />
                ))}
              </AnimatePresence>
            )}
          </div>
          
          {displayArticles.length === 0 && !loading && (
            <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-3xl">
              <p className="text-gray-400 font-medium">No results found for your search/filter criteria.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-gold-600 font-bold text-sm"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
