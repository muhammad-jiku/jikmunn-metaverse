'use client';
import React from 'react';

//  external import
import { motion } from 'framer-motion';

//  internal imports
import styles from '../../styles/index.js';
import { insights } from '../../constants/index.js';
import { staggerContainer } from '@/src/utils/motion';
import InsightCard from '../InsightCard/InsightCard';
import { TitleText, TypingText } from '../CustomTexts/CustomTexts';

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText
          title={<>Insight about metaverse</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
