import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-8">
      {/* 상단 헤더: 부드럽게 나타나기 */}
      <motion.header 
        initial="initial" animate="animate" variants={fadeInUp}
        className="max-w-4xl mx-auto mb-16 text-center"
      >
        <h1 className="text-4xl font-bold mb-2">Park Min-seo</h1>
        <p className="text-xl text-blue-600">International Studies & Web Enthusiast</p>
        <div className="mt-4 text-gray-500 space-x-4">
          <span>HUFS 21'</span>
          <span>Github: @heheiiiiii</span>
        </div>
      </motion.header>

      <motion.main 
        variants={stagger} initial="initial" animate="animate"
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* About 섹션 */}
        <motion.section variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold mb-4 border-b pb-2">About</h2>
          <p className="text-gray-600 leading-relaxed">
            국제학을 전공하며 세계를 연결하는 방식을 배웁니다. 
            단순히 언어를 넘어 기술(Web)을 통해 정보를 효율적으로 전달하는 것에 매력을 느낍니다.
          </p>
        </motion.section>

        {/* Skills 섹션: 마우스 호버 효과 */}
        <motion.section variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold mb-4 border-b pb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['Arabic', 'Chinese', 'React', 'Video Editing', 'Vibe Coding'].map((skill) => (
              <motion.span 
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: '#dbeafe' }}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-blue-700"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Projects 섹션: 세로로 길게 배치 */}
        <motion.section variants={fadeInUp} className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold mb-4 border-b pb-2">Featured Projects</h2>
          <div className="space-y-6">
            <div className="group">
              <h3 className="font-semibold text-blue-600 group-hover:underline cursor-pointer">KAM Project (Arabic Learning Method)</h3>
              <p className="text-sm text-gray-600">한국인에게 최적화된 아랍어 학습법 개발 및 웹 아카이빙</p>
            </div>
            <div className="group">
              <h3 className="font-semibold text-blue-600 group-hover:underline cursor-pointer">Global Travel Guide Web</h3>
              <p className="text-sm text-gray-600">개인 여행 기록 및 사진/영상 기반의 인터랙티브 가이드북 제작</p>
            </div>
          </div>
        </motion.section>
      </motion.main>

      <footer className="max-w-4xl mx-auto mt-20 text-center text-gray-400 text-sm">
        © 2026 Park Min-seo. Built with React & Framer Motion.
      </footer>
    </div>
  );
}
