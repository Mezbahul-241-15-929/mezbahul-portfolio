'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Download, GraduationCap } from 'lucide-react';

const education = [
  {
    title: 'SSC',
    institute: 'Amena-Baki Residential Model School & College',
    year: '2021',
    field: 'Science',
    result: 'Result: GPA 5.00 (out of 5.00)',
    logo: '/1.png',
    alt: 'Amena-Baki Residential Model School & College logo',
  },
  {
    title: 'HSC',
    institute: 'Cantonment School & College, Saidpur',
    year: '2023',
    field: 'Science',
    result: 'Result: GPA 4.84 (out of 5.00)',
    logo: '/2.png',
    alt: 'Cantonment School & College logo',
  },
  {
    title: 'BSC',
    institute: 'Daffodil International University',
    year: 'Studying',
    field: 'CSE',
    result: 'Average: CGPA 3.29',
    logo: '/3.png',
    alt: 'Daffodil International University logo',
  },
];

const cardClass =
  'relative overflow-hidden rounded-2xl border border-white/12 bg-[#080d2a]/95 shadow-[0_18px_55px_rgba(0,0,0,0.35)]';

export default function Aboutme() {
  return (
    <motion.section
      id="about"
      className="project-background relative overflow-hidden px-3 py-10 text-white sm:px-4 sm:py-14 lg:px-8 lg:py-16"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <motion.div
        className="relative mx-auto mb-5 max-w-7xl text-center sm:mb-6"
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="mx-auto mb-2 h-0.5 w-40 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 sm:w-56 md:w-64" />
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text font-serif italic text-transparent">
            About Me
          </span>
        </h2>
        <div className="mx-auto mt-2 h-0.5 w-40 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 sm:w-56 md:w-64" />
      </motion.div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-4 lg:grid-cols-[0.92fr_1.08fr] xl:gap-5">
        <motion.article
          className={`${cardClass} px-5 py-6 text-center sm:px-7 lg:px-8 lg:py-7`}
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-5 top-5 h-24 w-28 opacity-25 [background-image:radial-gradient(rgba(46,137,255,0.8)_1px,transparent_1px)] [background-size:13px_13px]" />
            <div className="absolute inset-x-0 top-0 mx-auto h-64 w-64 rounded-full border border-cyan-400/8" />
            <div className="absolute bottom-[-5rem] right-[-4rem] h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-xl flex-col items-center">
            <div className="relative grid h-44 w-44 place-items-center sm:h-48 sm:w-48 lg:h-52 lg:w-52">
              <div className="absolute inset-0 rounded-full border border-cyan-400/10" />
              <div className="absolute inset-5 rounded-full border border-blue-400/12" />
              <div className="absolute right-3 top-4 h-4 w-4 rounded-full border border-cyan-200/70 bg-[#061038] shadow-[0_0_0_6px_rgba(45,112,255,0.18)]" />
              <div className="relative h-32 w-32 overflow-hidden rounded-full bg-[linear-gradient(135deg,#19baff,#5b66ff,#b343ff)] p-1 shadow-[0_0_24px_rgba(34,164,255,0.28)] sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-[#050816]">
                  <Image
                    src="/Porfile/Profile2.JPG"
                    alt="Md. Mezbahul Islam"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px"
                  />
                </div>
              </div>
            </div>

            <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-[2rem]">
              Md. Mezbahul <span>Islam</span>
            </h2>

            <div className="mt-3 rounded-full border border-cyan-400/70 bg-cyan-400/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:px-5">
              Department of CSE
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-base font-semibold text-white sm:text-lg">
              <Building2 className="h-5 w-5 shrink-0 text-cyan-300" />
              <span>Daffodil International University</span>
            </div>

            <p className="mt-4 max-w-[31rem] text-sm leading-6 text-white/75 sm:text-[0.95rem]">
              Hi, I&apos;m Md. Mezbahul Islam, and I&apos;m from Bangladesh. I am a Web Developer and Graphic Designer.
              Currently, I am studying Computer Science and Engineering at Daffodil International University. I can build
              full-stack websites using the MERN stack.
            </p>

            <motion.a
              href="/Mezbahul%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(90deg,#168cff,#764bff,#a83cf2)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(39,125,255,0.24)]"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-4 w-4" />
              Download CV
            </motion.a>
          </div>
        </motion.article>

        <motion.article
          className={`${cardClass} px-4 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-7`}
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-[-4rem] h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute right-[-4rem] bottom-[-5rem] h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>

          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/30 bg-[#0b1235] text-[#7fd5ff]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold sm:text-2xl">Education</h3>
                <div className="mt-2 h-px w-24 bg-[linear-gradient(90deg,#41c7ff,#ba59ff)]" />
              </div>
            </div>

            <div className="relative sm:pl-8">
              <div className="absolute left-3 top-2 bottom-2 hidden w-px bg-blue-300/45 sm:block" />

              {education.map((item, index) => (
                <div
                  key={item.title}
                  className={`relative grid grid-cols-[minmax(0,1fr)_80px] items-start gap-3 py-4 sm:grid-cols-[minmax(0,1fr)_96px] ${index !== education.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                >
                  <span className="absolute left-[-1.85rem] top-6 hidden h-5 w-5 place-items-center rounded-full border-2 border-blue-200 bg-[#0b1235] shadow-[0_0_0_4px_rgba(76,107,255,0.16)] sm:grid">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-200" />
                  </span>

                  <div className="min-w-0">
                    <h4 className="text-base font-bold text-[#23baff] sm:text-lg">{item.title}</h4>
                    <p className="mt-1.5 text-sm leading-6 text-white/90 sm:text-[0.95rem]">{item.institute}</p>
                    <p className="mt-1.5 text-sm text-white/55">
                      {item.year} <span className="mx-2 text-white/30">|</span> {item.field}
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-[#25afff]">{item.result}</p>
                  </div>

                  <div className="flex justify-end self-start">
                    <div className="grid h-20 w-20 place-items-center rounded-2xl border border-white/12 bg-black/15 p-2.5 sm:h-24 sm:w-24">
                      <Image src={item.logo} alt={item.alt} width={96} height={96} className="h-full w-full object-contain" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
