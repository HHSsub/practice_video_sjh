import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Play, Sparkles, Brain, Zap, Star, CheckCircle, Quote } from 'lucide-react';

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "콘셉트 제안",
      description: "AI가 브랜드 분석을 통해 최적의 영상 콘셉트를 제안합니다",
      features: ["브랜드 톤앤매너 분석", "트렌드 기반 아이디어", "타겟 맞춤 콘텐츠"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "스토리보드 생성",
      description: "자동화된 시각적 스토리보드로 영상의 흐름을 미리 확인하세요",
      features: ["자동 씬 구성", "비주얼 프리뷰", "실시간 수정 가능"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "영상 완성",
      description: "최첨단 AI 기술로 고품질 영상을 빠르게 제작합니다",
      features: ["4K 고화질 렌더링", "다양한 포맷 지원", "빠른 제작 속도"]
    }
  ];

  const portfolioVideos = [
    {
      title: "패션 브랜드 광고",
      client: "Fashion Co.",
      category: "브랜드 영상",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    ,
      previewSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },
    {
      title: "테크 스타트업 소개",
      client: "TechStart Inc.",
      category: "기업 소개",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    ,
      previewSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },
    {
      title: "제품 런칭 캠페인",
      client: "Product Launch",
      category: "제품 광고",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ,
      previewSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    }
  ];

  const testimonials = [
    {
      name: "김민수",
      company: "마케팅 디렉터",
      content: "AI 영상 제작으로 제작 시간을 70% 단축했습니다. 품질도 예상보다 훨씬 좋았어요.",
      rating: 5
    },
    {
      name: "이지영",
      company: "브랜드 매니저",
      content: "복잡한 브랜드 스토리를 명확하게 전달하는 영상이 완성되었습니다. 매우 만족스러워요.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "비용은 어떻게 되나요?",
      answer: "프로젝트 규모와 요구사항에 따라 맞춤 견적을 제공합니다. 기본 영상은 300만원부터 시작하며, 복잡한 프로젝트는 상담을 통해 정확한 견적을 드립니다."
    },
    {
      question: "내 브랜드만의 개성 반영이 가능한가요?",
      answer: "네, 물론입니다. AI는 브랜드 가이드라인, 기존 마케팅 자료, 톤앤매너를 학습하여 브랜드만의 독특한 스타일을 반영한 영상을 제작합니다."
    },
    {
      question: "제작 기간은 얼마나 걸리나요?",
      answer: "일반적으로 7-14일 소요됩니다. 스토리보드 승인 후 3-5일 내 초안을 제공하며, 수정 과정을 포함하여 최종 완성까지 2주 정도 예상하시면 됩니다."
    },
    {
      question: "수정은 몇 번까지 가능한가요?",
      answer: "기본 패키지에서 3회 수정이 포함되어 있습니다. 추가 수정이 필요한 경우 합리적인 비용으로 진행 가능합니다."
    }
  ];

  const handleCTAClick = () => {
    // 실제 구현에서는 문의 폼이나 상담 페이지로 이동
    alert("견적 문의 기능이 곧 추가됩니다!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30 hover:bg-blue-600/30">
            <Sparkles className="w-4 h-4 mr-2" />
            혁신적인 AI 영상 제작 기술
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Reimagine Video Ads
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              with AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            최첨단 AI 기술로 브랜드 스토리를 완벽하게 담은<br />
            프리미엄 영상을 빠르고 정확하게 제작합니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleCTAClick}
            >
              견적 문의하기
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-600 text-white hover:bg-gray-800 px-6 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              포트폴리오 보기
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">
              서비스 프로세스
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              <a id="services"></a>
              3단계로 완성되는
              <br />AI 영상 제작
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              복잡한 영상 제작 과정을 AI가 간단하고 빠르게 처리합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="ml-4 text-2xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                      0{index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600/20 text-green-300 border-green-500/30">
              포트폴리오
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              <a id="portfolio"></a>
              실제 제작 사례
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              다양한 브랜드와 함께한 성공적인 AI 영상 제작 사례들을 확인해보세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {portfolioVideos.map((video, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-600/80 text-white">
                    {video.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-400">클라이언트: {video.client}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-600 text-white hover:bg-gray-800 hover:border-blue-500"
              onClick={handleCTAClick}
            >
              더 많은 포트폴리오 보기
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-600/20 text-yellow-300 border-yellow-500/30">
              고객 후기
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              <a id="reviews"></a>
              클라이언트가 말하는
              <br />AI 영상의 가치
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/70 border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-yellow-400 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-600/20 text-orange-300 border-orange-500/30">
              자주 묻는 질문
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              <a id="faq"></a>
              궁금한 점이 있으신가요?
            </h2>
            <p className="text-gray-400 text-lg">
              AI 영상 제작에 대한 궁금증을 해결해드립니다. <br />
              <span className="text-blue-400">간단한 문의도 언제든 환영합니다!</span>
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-800/50 border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-300 text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleCTAClick}
            >
              상담 신청하기
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            <a id="contact"></a>
              AI 영상의 시대,
            <br />지금 시작하세요
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            브랜드만의 독특한 스토리를 AI가 완벽한 영상으로 구현합니다.<br />
            혁신적인 기술과 창의적인 아이디어의 만남을 경험해보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleCTAClick}
            >
              지금 시작하기
              <Sparkles className="w-6 h-6 ml-2" />
            </Button>
            
            <p className="text-blue-200 text-sm">
              무료 상담 • 맞춤 견적 • 빠른 응답
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              AI Video Studio
            </h3>
            <p className="text-gray-400 mb-6">
              Reimagining video creation with artificial intelligence
            </p>
            <div className="flex justify-center space-x-6 text-gray-500">
              <span>© 2024 AI Video Studio</span>
              <span>•</span>
              <span>혁신적인 AI 영상 제작</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}