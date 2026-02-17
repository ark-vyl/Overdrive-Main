"use client";

import { cn } from '@/app/utils/cn';
import { fontGroup } from '@/app/utils/font-wrapper';
import { useState, useRef } from 'react';
import { useUserLocation } from '../context/user-location';
import { useIntersectionObserver } from '../hook/observer-hook';

// Data dummy members - adapted for Overdrive Protocol theme
const members = [
  {
    id: "OP-01",
    name: "KEVICO",
    role: "Lead Architect",
    clearance: "Level 5",
    status: "Active",
    specialty: "System Core",
    stats: {
      coding: 98,
      security: 95,
      stealth: 90,
      operations: 85
    },
    bio: "The architect of the Overdrive Protocol. Identity unknown. Operates from the shadows to ensure system integrity."
  },
  {
    id: "OP-02",
    name: "AMMAAR",
    role: "Web developer",
    clearance: "Level 4",
    status: "Active",
    specialty: "Penetration Testing",
    stats: {
      coding: 85,
      security: 99,
      stealth: 95,
      operations: 80
    },
    bio: "Expert in offensive cybersecurity. Responsible for stress-testing the protocol's defenses against external threats."
  },
  {
    id: "OP-03",
    name: "LEON",
    role: "Network Ops",
    clearance: "Level 4",
    status: "Mission",
    specialty: "Traffic Analysis",
    stats: {
      coding: 80,
      security: 85,
      stealth: 98,
      operations: 90
    },
    bio: "Monitors global network traffic for the protocol. Can trace any signal back to its source within seconds."
  },
  {
    id: "OP-04",
    name: "CIPHER",
    role: "Cryptographer",
    clearance: "Level 4",
    status: "Active",
    specialty: "Encryption",
    stats: {
      coding: 95,
      security: 90,
      stealth: 80,
      operations: 75
    },
    bio: "Master of encryption algorithms. Ensures that Overdrive's data remains inaccessible to unauthorized entities."
  },
  {
    id: "OP-05",
    name: "ECHO",
    role: "Recruit",
    clearance: "Level 2",
    status: "Training",
    specialty: "Frontend",
    stats: {
      coding: 75,
      security: 60,
      stealth: 50,
      operations: 65
    },
    bio: "New recruit showing promise in interface design and user experience optimization."
  }
];

export function MemberSection() {
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const userLoc = useUserLocation()
  const sectionRef = useRef(null)

  useIntersectionObserver({
    ref: sectionRef,
    option: {
      threshold: 0.5
    },
    isObserving: () => {
      userLoc.setNavLocation('Member')
    }
  })

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-transoarent overflow-hidden py-12 px-4 md:px-8" 
      id='member'
    >
      {/* Background Effects */}
        {/* Header */}
        <div className="mb-12 border-b border-red-900/30 pb-6 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className={cn(fontGroup.postNoBills, "text-5xl md:text-6xl text-white mb-2 tracking-wide")}>
              MEMBER <span className="text-red-600">OVERDRIVE</span>
            </h2>
            <p className={cn(fontGroup.kodeMono('Medium'), "text-gray-400 text-sm md:text-base tracking-widest")}>
              // AUTHORIZED PERSONNEL ONLY
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className={cn(fontGroup.kodeMono('Bold'), "text-green-500 text-sm")}>
              SYSTEM ONLINE
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
          
          {/* LEFT COLUMN: MEMBER LIST */}
          <div className="lg:w-1/3 flex flex-col space-y-4">
            <div className="bg-gray-900/30 border border-red-900/30 p-4 rounded-lg backdrop-blur-sm">
              <h3 className={cn(fontGroup.kodeMono('SemiBold'), "text-red-400 text-lg mb-4 flex items-center")}>
                <span className="w-2 h-4 bg-red-600 mr-2"></span>
                ACTIVE AGENTS
              </h3>
              
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {members.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className={cn(
                      "w-full text-left p-3 rounded transition-all duration-300 border group relative overflow-hidden",
                      selectedMember.id === member.id
                        ? "bg-red-950/40 border-red-500/50 shadow-[0_0_15px_rgba(220,38,38,0.2)]"
                        : "bg-black/40 border-gray-800 hover:border-red-900/60 hover:bg-gray-900/60"
                    )}
                  >
                    {/* Active Indicator Bar */}
                    {selectedMember.id === member.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                    )}

                    <div className="flex justify-between items-center pl-2">
                      <div>
                        <div className={cn(
                          fontGroup.kodeMono('Bold'), 
                          "text-base md:text-lg transition-colors",
                          selectedMember.id === member.id ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                        )}>
                          {member.name}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400">
                          {member.role}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded border mb-1",
                          member.status === 'Active' ? "border-green-900/50 text-green-500 bg-green-950/20" :
                          member.status === 'Mission' ? "border-yellow-900/50 text-yellow-500 bg-yellow-950/20" :
                          "border-gray-700 text-gray-500"
                        )}>
                          {member.status}
                        </span>
                        <span className="text-[10px] text-red-900/80 font-mono">{member.id}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* System Status Panel (Similar to GalleryModal) */}
            <div className="bg-black/50 border border-gray-800 p-4 rounded-lg">
              <div className="flex justify-between text-xs text-gray-500 mb-2 font-mono">
                <span>ENCRYPTION</span>
                <span>AES-256</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-2 font-mono">
                <span>CONNECTION</span>
                <span className="text-green-500">SECURE</span>
              </div>
              <div className="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
                <div className="bg-red-900/50 h-full w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MEMBER DETAILS */}
          <div className="lg:w-2/3">
            <div className="h-full bg-gradient-to-br from-gray-900/50 to-black border border-red-900/30 rounded-xl p-6 md:p-8 relative overflow-hidden flex flex-col">
              
              {/* Background detail elements */}
              <div className="absolute top-0 right-0 p-4 opacity-20">
                 <div className="w-32 h-32 border-t-2 border-r-2 border-red-500 rounded-tr-3xl"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-4 opacity-20">
                 <div className="w-32 h-32 border-b-2 border-l-2 border-red-500 rounded-bl-3xl"></div>
              </div>

              {/* Detail Header */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-red-600 text-black text-xs font-bold rounded">
                      {selectedMember.id}
                    </span>
                    <span className="text-red-500 text-xs tracking-widest uppercase">
                      // {selectedMember.specialty}
                    </span>
                  </div>
                  <h1 className={cn(fontGroup.postNoBills, "text-6xl md:text-7xl text-white tracking-wider bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent")}>
                    {selectedMember.name}
                  </h1>
                </div>
                
                <div className="mt-4 md:mt-0 text-right">
                  <div className={cn(fontGroup.kodeMono('Bold'), "text-2xl text-red-500")}>
                    {selectedMember.clearance}
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">
                    Security Clearance
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 flex-1">
                
                {/* Avatar / Visual Placeholder */}
                <div className="bg-black/50 border border-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden group min-h-[250px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hexagon-like shape or icon placeholder */}
                  <div className="relative w-32 h-32 border-2 border-red-500/30 rounded-full flex items-center justify-center group-hover:border-red-500/80 transition-colors duration-300">
                    <div className="w-24 h-24 bg-red-900/20 rounded-full flex items-center justify-center animate-pulse">
                      <span className={cn(fontGroup.postNoBills, "text-5xl text-red-500")}>
                        {selectedMember.name.charAt(0)}
                      </span>
                    </div>
                    {/* Orbiting dots */}
                    <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                      <div className="w-2 h-2 bg-red-500 rounded-full absolute -top-1 left-1/2 -translate-x-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-red-500"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-red-500"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-red-500"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-red-500"></div>
                </div>

                {/* Stats & Info */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h4 className={cn(fontGroup.kodeMono('SemiBold'), "text-gray-300 mb-2 border-b border-gray-800 pb-1")}>
                      OPERATIVE BIO
                    </h4>
                    <p className={cn(fontGroup.kodeMono('Medium'), "text-gray-400 text-sm leading-relaxed")}>
                      {selectedMember.bio}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className={cn(fontGroup.kodeMono('SemiBold'), "text-gray-300 mb-2 border-b border-gray-800 pb-1")}>
                      SKILLSET MATRIX
                    </h4>
                    
                    {Object.entries(selectedMember.stats).map(([stat, value]) => (
                      <div key={stat} className="flex flex-col">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-400 uppercase">{stat}</span>
                          <span className="text-red-400">{value}%</span>
                        </div>
                        <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-red-800 to-red-500 h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="mt-8 pt-6 border-t border-red-900/20 flex justify-end space-x-4 relative z-10">
                <button className="px-4 py-2 bg-transparent border border-gray-700 text-gray-400 text-xs hover:text-white hover:border-gray-500 transition-colors uppercase tracking-wider">
                  View Logs
                </button>
                <button className="px-6 py-2 bg-red-900/20 border border-red-500/50 text-red-400 text-xs hover:bg-red-900/40 hover:text-red-200 hover:border-red-400 transition-all uppercase tracking-wider shadow-[0_0_10px_rgba(220,38,38,0.1)] hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                  Contact Operative
                </button>
              </div>

            </div>
          </div>
        </div>
    </section>
  );
}
