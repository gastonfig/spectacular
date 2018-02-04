export const timelineData = {
  'timeline-name': 'My App',
  totalTime: 5000,
  layers: [
    {
      name: 'opacity',
      animations: [
        {
          duration: 1000,
          delay: 0,
          startValue: '0',
          endValue: '1',
          easing: 'linear'
        },
        {
          duration: 2000,
          delay: 1000,
          startValue: '1',
          endValue: '0',
          easing: 'linear'
        }
      ]
    },
    {
      name: 'width',
      animations: [
        {
          duration: 3000,
          delay: 500,
          startValue: '20px',
          endValue: '100px',
          easing: 'linear'
        },
        {
          duration: 500,
          delay: 100,
          startValue: '100px',
          endValue: '0px',
          easing: 'linear'
        }
      ]
    },
    {
      name: 'Y position',
      animations: [
        {
          duration: 2500,
          delay: 0,
          startValue: '0px',
          endValue: '300px',
          easing: 'linear'
        }
      ]
    }
  ]
};
