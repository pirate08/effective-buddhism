import React from 'react';

const Box_Source = [
  {
    title: 'Four Truths, Four Vows',
    anker: 'https://secularbuddhism.org/four-truths-four-vows/',
    description:
      "This is another in my series of discussions of ideas Stephen Batchelor has been presenting in dharma talks since late 2010. You can hear them at dharmaseed.org. One of the attractive ideas to come out of Stephen Batchelor's recent teaching is a mapping of the Four Noble Truths onto the Four Bodhisattva Vows of the Zen tradition, a concept Batchelor got from former Zen priest and current Vipassana teacher Gil Fronsdal.",
    link: 'https://secularbuddhism.org/four-truths-four-vows/',
  },
  {
    title: 'List of Buddha claimants - Wikipedia',
    anker: 'https://en.wikipedia.org/wiki/List_of_Buddha_claimants',
    description:
      "Bahá'u'lláh - prophet of Persian origin, founder of the Baháʼí Faith stated publicly in 1863 CE that he is the promised Manifestation of God for this age predicted in all prophetic religions of the past.",
    link: 'https://en.wikipedia.org/wiki/List_of_Buddha_claimants',
  },
  {
    title: 'Homepage',
    anker: 'https://www.worldtribune.org/',
    description:
      'Every year since 1983, Daisaku Ikeda, as the SGI president, has issued a peace proposal, exploring the interrelation between core Buddhist concepts and the diverse challenges global society faces.',
    link: 'https://www.worldtribune.org/',
  },
];

const Sources = () => {
  return (
    <div>
      <div className='mb-5'>
        <h1 className='text-xl font-bold'>Sources:</h1>
      </div>
      {Box_Source.map((box_source, index) => (
        <div key={index} className='px-10 break-normal'>
          <div className='border rounded-lg pl-5 pr-3 shadow-md mb-4'>
            <a href={box_source.anker}>
              <h1 className='text-lg mb-2'>{box_source.title}</h1>
              <p className='text-sm mb-2 text-gray-400'>
                {box_source.description}
              </p>
              <p className='mb-3 hidden sm:block'>{box_source.link}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sources;
