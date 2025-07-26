
import { ScrollReveal } from "./ScrollReveal"

export function Timeline({ milestones }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <ScrollReveal key={index} delay={index * 200}>
            <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <div className="glass-effect p-6 rounded-2xl">
                  <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="w-5/12"></div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
