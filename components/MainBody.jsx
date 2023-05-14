'use client';

import React, { useEffect } from 'react';
import Option2 from '@/partials/Option2';
import Sources from '@/partials/Sources';
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Image from 'next/image';

const MainBody = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  return (
    <div className='scroll-smooth'>
      {/* First Image--- */}
      <div className='min-h-screen bg-buddha bg-fixed bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <div>
          <h1
            className='bg-black px-8 py-4 text-white font-bold text-2xl sm:text-4xl'
            data-aos='fade-up'
            data-aos-delay='300'>
            Effective Buddhism
          </h1>
        </div>
      </div>
      {/* First Part--- */}
      <div className='min-h-screen bg-white bg-no-repeat bg-cover bg-center bg-fixed pt-14 px-8 sm:px-14 mb-6'>
        <div data-aos='fade-right' data-aos-delay='300'>
          <h1 className='mb-3 text-2xl text-yellow-500 font-bold'>Thesis:</h1>
          <p className='mb-6 text-gray-500'>
            Buddhism is an amazing philosophy full of wisdom with great truths,
            however I believe Buddhists have lost the way of the Buddha and lack
            a real basis of impact. Effective Buddhism is a solution to those
            who seek to follow the Buddhist Path as Buddha Wanted. If Buddha was
            alive today, imagine the amount of change and impact he would be
            having.
          </p>
          <h1 className='mb-3 text-2xl text-yellow-500 font-bold'>Evidence:</h1>
          <p className='mb-6 text-gray-500'>
            In current Buddhist society, the top Buddhist role models have iron
            wills, but lack real ACTION or PURPOSE behind this because of a
            misinterpretation of Dharma. Buddha’s four main vows tell a
            different story of how the Buddha should act.
          </p>
        </div>
        <div data-aos='fade-right' data-aos-delay='300'>
          <p className='text-gray-400 mb-3'>
            The Bodhisattva Vows exist in many different forms; they are chanted
            as follows:
          </p>
          <ul className='list-decimal italic pl-6 text-lg'>
            <li className='mb-2'>
              Creations are numberless, I vow to free them.
            </li>
            <li className='mb-2'>
              Delusions are inexhaustible, I vow to transform them.
            </li>
            <li className='mb-2'>
              Reality is boundless, I vow to perceive it.
            </li>
            <li className='mb-5'>
              The awakened way is unsurpassable, I vow to embody it.
            </li>
          </ul>
          <p className='text-gray-400 mb-3'>It’s also said in this way.</p>
          <ul className='list-decimal pl-6 text-lg'>
            <li className='mb-2'>
              Living beings are limitless, I vow to liberate them all.
            </li>
            <li className='mb-2'>
              Blind passions are limitless, I vow to sever them all.
            </li>
            <li className='mb-2'>
              Dharma gates are inexhaustible, I vow to know them all.
            </li>
            <li className='mb-5'>
              Unsurpassed is awakening, I vow to realize it.
            </li>
          </ul>
          <p className='text-gray-400 mb-3'>Or, in the most laymen terms:</p>
          <ul className='list-decimal pl-6 text-lg'>
            <li className='mb-2'>To save all people.</li>
            <li className='mb-2'>To renounce all worldly desires.</li>
            <li className='mb-2'>To learn all teachings.</li>
            <li className='mb-5'>To attain perfect enlightenment.</li>
          </ul>
          <div data-aos='fade-right' data-aos-delay='300'>
            {/* Paragraph--- */}
            <p className='mt-8 mb-5 text-gray-500'>
              If you go searching, there are many other ways these four vows are
              written, but they are all telling the same thing, in this order.
            </p>
            <p className='mb-7 text-gray-500'>
              As anyone may observe from the outside, the most influential
              people in the world today are not Buddhists. On top of that anyone
              from a Non-Buddhist city, will tell you that they have not heard
              from a Buddhist about why that path is best.
            </p>
            <p className='mb-7 text-gray-500'>
              It is a sickness is the Buddha communities today to ignore the
              first vow, and try to move on to 2,3, and 4. By the very means of
              the vows, step 2 cannot be done without first completing step 1.
              Step 1 is in fact, an earthly desire. The Four Main Vows are a
              harmonious right of passage that must be balanced in action
              towards their completion.
            </p>
            <p className='mb-7 text-gray-500'>
              Therefore, the way of the Buddha should be to renounce all worldly
              desires IN ORDER TO save all people, and to learn all teachings IN
              ORDER TO save all people, and that once these steps are completed
              perfect enlightenment will be attained. This means that these
              tasks are in harmony. As one renounces more wordy desires to spend
              more time saving people, one learns teachings to improve how they
              go about saving others, and rides the collective path towards
              enlightenment.
            </p>
            <p className='mb-7 text-gray-500'>
              However, instead of following this path and order, Buddhists today
              are known as people continually meditating. Struggling to awaken
              and renounce all worldly desires, and instead all acting to each
              other like they are farther along the path. I believe Buddhism has
              become a sick game of ineffective spiritual ego stroking.
            </p>
            <p className='mb-7 text-gray-500'>
              I am not saying that the Men and Women who have become great at
              meditating for hours and wholly living a minimalist life have not
              gone further down their path of enlightenment, instead that it is
              very sad that so much potential is moving towards the wrong place
              for the world to awaken and be saved. It is a fact these people
              who realize their potential to follow the first vow will be some
              of the strongest Buddhas there are.
            </p>
            <p className='mb-7 text-gray-500'>
              The funny thing about tech entrepreneurs who are rapidly changing
              the future, and Buddhism is that these tech entrepreneurs are
              slowly learning the way of the Buddha in order to optimize
              themselves. They are reaching new paths of enlightenment. Instead
              of referring to their actions as the Buddha way, they are learning
              the teachings of Buddha in order to be more effective.
            </p>
          </div>
          {/* 10 precepts--- */}
          <div data-aos='fade-right' data-aos-delay='300'>
            <h6 className='text-gray-400 mb-4'>
              A few examples of parallel movements to the 10 precepts are:
            </h6>
            <h6 className='mb-2'>
              Not to engage in licentious acts or encourage others to do so. A
              monk is expected to abstain from sexual conduct entirely.
            </h6>
            <h6 className='mb-2'>
              Not to use false words and speech, or encourage others to do so.
            </h6>
            <h6 className='mb-2'>
              Not to trade or sell alcoholic beverages or encourage others to do
              so.
            </h6>
            <h6 className='mb-2'>
              Not to harbor anger or encourage others to be angry.
            </h6>
            <Option2 />
          </div>
        </div>
      </div>
      {/* Second Image--- */}
      <div className='min-h-screen bg-buddha2 bg-fixed bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <div>
          <h1
            className='bg-white px-8 py-4 text-black font-bold text-2xl sm:text-4xl'
            data-aos='fade-down'
            data-aos-delay='300'>
            Message from Buddha
          </h1>
        </div>
      </div>
      {/* Last Part--- */}
      <div className='min-h-screen bg-white bg-no-repeat bg-cover bg-center bg-fixed pt-14 px-8 sm:px-14 mb-6'>
        {/* Last Paragraphs--- */}
        <div data-aos='fade-right' data-aos-delay='300'>
          <h1 className='mb-3 text-2xl text-yellow-500 font-bold'>
            Reiterating The Message:
          </h1>
          <p className='mb-10 text-gray-500'>
            Many buddhists today practice the seeking of enlightenment rather
            than practicing the way of Buddha himself. Buddha was an enlightened
            being who spread his philosophy far and wide, preaching and changing
            and influencing the world and his actions live on to this day.
          </p>
          <p className='mb-6 text-gray-500'>
            Buddhists in most countries are seen as people who simply meditate.
            The idea is to relinquish attachment to earthly desires in order to
            DO MORE. Not to meditate all day to do nothing. In an effort of
            learning all teachings, we will re-evaluate the core values, and
            give a new perspective based on the teachings. The core
            re-evaluation leads us to the idea that Nirvana is something to
            achieve in this realm. And that leaving this realm is a negative
            desire in it of itself.
          </p>
          <h6 className='text-gray-400 mb-2'>Let’s break them down.</h6>
          <ul className='list-decimal pl-7 text-gray-600 mb-6'>
            <li className='mb-2'>
              To save all people: this is by far the biggest vow that is failed
              to be recognized by modern Buddhist society. Outreach is a
              non-factor. So many people who need this valuable information are
              left in the dark, with no outreach from Buddhists. Actual progress
              using technology (tools to increase impact) are completely
              disregarded.
            </li>
            <li className='mb-2'>
              Many people have regarded this initial vow as meaning to renounce.
              But here’s what the true text says “
              <span className='font-bold text-black'>Desires</span> for tangible
              things (such as wealth, property, or other material goods) or for
              pleasures of the body (such as sexual activity, gluttony, or other
              hedonistic pursuits). Buddhism teaches us to try to let go of our
              <span className='font-bold text-black'> worldly desires</span>,
              freeing our minds and bodies for a state of enlightenment.”As it
              says, freeing our minds and bodies for a state of enlightenment.
            </li>
            <li className='mb-2'>
              Learning all teachings requires knowing all things, we do not even
              know how consciousness works yet. To learn all teachings, we need
              to learn by the act of doing. There is no better thing to learn at
              this time, than how to spread change like Buddha did.
            </li>
            <li className='mb-2'>
              “In
              <span className='font-bold text-black'>
                {' '}
                Buddhism, enlightenment{' '}
              </span>
              (called bodhi in Indian{' '}
              <span className='font-bold text-black'>Buddhism</span>, or satori
              in Zen <span className='font-bold text-black'>Buddhism</span>) is
              when a <span className='font-bold text-black'>Buddhist</span>{' '}
              finds the truth about life and stops being reborn because they
              have reached Nirvana.” In order to stop the cycle of rebirth, we
              must stop the death to life cycle. With infinite time our
              particles are always brought back to a conscious form. Until we
              find a conscious form to reach Nirvana in, we will repeat the
              cycle. “<span className='font-bold text-black'>Rebirth</span> in{' '}
              <a
                href='https://en.m.wikipedia.org/wiki/Buddhism'
                className='bg-yellow-400 rounded-md px-1'>
                {' '}
                Buddhism
              </a>{' '}
              refers to its teaching that the actions of a person lead to a new
              existence after death, in an endless cycle called{' '}
              <a
                href='https://en.m.wikipedia.org/wiki/Sa%E1%B9%83s%C4%81ra'
                className='bg-yellow-400 rounded-md px-1'>
                saṃsāra
              </a>
              .[1][2] This cycle is considered to be{' '}
              <a
                href='https://en.m.wikipedia.org/wiki/Du%E1%B8%A5kha'
                className='bg-yellow-400 rounded-md px-1'>
                dukkha
              </a>
              , unsatisfactory and painful. The cycle stops only if{' '}
              <a
                href='https://en.m.wikipedia.org/wiki/Moksha'
                className='bg-yellow-400 rounded-md px-1'>
                liberation
              </a>
              is achieved by{' '}
              <a
                href='https://en.m.wikipedia.org/wiki/Enlightenment_in_Buddhism'
                className='bg-yellow-400 rounded-md px-1'>
                insight
              </a>{' '}
              and the{' '}
              <a
                href='https://en.m.wikipedia.org/wiki/Nirvana'
                className='bg-yellow-400 rounded-md px-1'>
                extinguishing of craving
              </a>
              .
            </li>
          </ul>
        </div>
        {/* Sources part--- */}
        <div>
          <Sources />
        </div>
        {/* Path-Notes--- */}
        <div className='flex flex-col sm:flex-row justify-end gap-y-2 sm:text-sm'>
          <div className='flex items-center hover:text-gray-600'>
            <Image
              src='/Assets/pathlogo.png'
              width={30}
              height={20}
              alt='Logo Of path of buddha'
            />
            <Link href='/'>The Path of the e/Buddha</Link>
          </div>
          <div className='flex items-center hover:text-gray-600'>
            <Image
              src='/Assets/miscnotes.png'
              width={30}
              height={20}
              alt='Logo of misc notes'
            />
            <Link href='/'>Misc Notes</Link>
          </div>
        </div>
      </div>
      {/* Last Image--- */}
      <div className='min-h-screen bg-buddha3 bg-fixed bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <div>
          <h1
            className='bg-white px-8 py-4 text-black font-bold text-2xl text-center sm:text-4xl'
            data-aos='fade-down'
            data-aos-delay='300'>
            The Root of Suffering is Attachment.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
