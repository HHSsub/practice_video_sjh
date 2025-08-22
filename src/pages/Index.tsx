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
      title: "AI 패션 브랜드 광고",
      client: "Fashion Co.",
      category: "브랜드 영상",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      videoUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      effects: ["모션 그래픽", "색상 변환", "동적 텍스트"]
    },
    {
      title: "AI 테크 스타트업 소개",
      client: "TechStart Inc.",
      category: "기업 소개",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      videoUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      effects: ["3D 애니메이션", "파티클 효과", "트랜지션"]
    },
    {
      title: "AI 제품 런칭 캠페인",
      client: "Product Launch",
      category: "제품 광고",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      videoUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      effects: ["시네마틱 효과", "AI 보정", "동적 로고"]
    },
    {
      title: "AI 뮤직비디오 제작",
      client: "Music Artist",
      category: "뮤직비디오",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      videoUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      effects: ["비주얼 이펙트", "리듬 싱크", "컬러 그레이딩"]
    },
    {
      title: "AI 소셜미디어 콘텐츠",
      client: "Social Brand",
      category: "소셜 영상",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      videoUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      effects: ["숏폼 최적화", "트렌드 효과", "자동 편집"]
    },
    {
      title: "AI 교육 콘텐츠",
      client: "EduTech Co.",
      category: "교육 영상",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      videoUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      effects: ["인포그래픽", "애니메이션", "음성 합성"]
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
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full animate-pulse ${
                  i % 4 === 0 ? 'w-2 h-2 bg-blue-400' : 
                  i % 4 === 1 ? 'w-1 h-1 bg-purple-400' :
                  i % 4 === 2 ? 'w-1.5 h-1.5 bg-green-400' :
                  'w-0.5 h-0.5 bg-white'
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 4}s`
                }}
              ></div>
            ))}
            
            {/* 추가 동적 요소들 */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`floating-${i}`}
                className="absolute w-4 h-4 border border-blue-400/30 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
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
            영상이 말하는
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              순간
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            당신의 아이디어가 영상이 되는<br />
            마법 같은 순간을 경험하세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleCTAClick}
            >
              지금 시작하기
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              성공 사례 보기
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
              생각에서 영상까지,
              <br />단 3단계
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              복잡한 영상 제작 과정을 AI가 간단하고 빠르게 처리합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* 배경 그라데이션 효과 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {service.icon}
                    </div>
                    <div className="ml-4 text-2xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                      0{index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li 
                        key={fIndex} 
                        className="flex items-center text-gray-300 group-hover:text-white transition-all duration-300"
                        style={{
                          transitionDelay: `${fIndex * 100}ms`
                        }}
                      >
                        <CheckCircle className="w-4 h-4 mr-3 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* 하단 진행 바 */}
                  <div className="mt-6 w-full h-0.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
                  </div>
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
              불가능을 가능으로 만든
              <br />순간들
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              다양한 브랜드와 함께한 성공적인 AI 영상 제작 사례들을 확인해보세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {portfolioVideos.map((video, index) => (
              <Card key={index} className="bg-gray-800/70 border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-500 group cursor-pointer relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* 동적 오버레이 효과 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {video.effects.map((effect, effectIndex) => (
                          <Badge key={effectIndex} className="bg-blue-600/80 text-white text-xs px-2 py-1 backdrop-blur-sm">
                            {effect}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* 재생 버튼 */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* 카테고리 배지 */}
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white backdrop-blur-sm">
                    {video.category}
                  </Badge>
                  
                  {/* AI 표시 */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 mb-3">클라이언트: {video.client}</p>
                  
                  {/* 프로그레스 바 효과 */}
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
                  </div>
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
              함께한 브랜드들의
              <br />진짜 이야기
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
              지금 시작하기
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
            당신의 이야기,
            <br />지금 시작하세요
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            아이디어만 있다면 충분합니다.<br />
            나머지는 AI가 완벽하게 해결해드립니다.
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