export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: 'https://s1.52poke.com/wiki/thumb/6/6d/HOME_132.png/150px-HOME_132.png',
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '1:1',
          gravity: 'center'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [],
          position: 'absolute',
          background: {
            type: 'linearGradient',
            angle: '0deg',
            endColor: '#00000000',
            startColor: '#00000099'
          },
          width: '100%',
          height: '40%',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px'
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: 'Dtto',
                      size: 'xl',
                      color: '#ffffff'
                    }
                  ]
                }
              ],
              spacing: 'xs'
            }
          ],
          position: 'absolute',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
          paddingAll: '20px'
        }
      ],
      paddingAll: '0px'
    }
  }
}
