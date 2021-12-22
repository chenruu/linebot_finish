import template from '../template/flex3.js'
import kid from '../kid.js'

export default (event) => {
  const Xindian = []
  const flex = JSON.parse(JSON.stringify(template))
  try {
    for (let i = 0; i < kid.length; i++) {
      if (event.message.type === 'text') {
        const city = kid[i].address.slice(3, 6)
        if (city === '新店區') {
          Xindian.push({
            title: kid[i].title,
            address: kid[i].address,
            tel: kid[i].tel,
            avaliable: kid[i].avaliable
          })
          if (Xindian.length >= 5) {
            for (let i = 0; i < Xindian.length; i++) {
              flex.contents.contents.push({
                type: 'bubble',
                hero: {
                  type: 'image',
                  url: 'https://image.freepik.com/free-vector/cheerful-happy-cute-girl-hand-drawn-cartoon-art-illustration_56104-740.jpg',
                  size: 'full',
                  aspectRatio: '20:13',
                  aspectMode: 'cover',
                  action: {
                    type: 'uri',
                    uri: 'http://linecorp.com/'
                  }
                },
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'text',
                      text: Xindian[i].title,
                      weight: 'bold',
                      size: 'xl'
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      margin: 'lg',
                      spacing: 'sm',
                      contents: [
                        {
                          type: 'box',
                          layout: 'baseline',
                          spacing: 'sm',
                          contents: [
                            {
                              type: 'text',
                              text: '地址',
                              color: '#aaaaaa',
                              size: 'sm',
                              flex: 1
                            },
                            {
                              type: 'text',
                              text: Xindian[i].address,
                              wrap: true,
                              color: '#666666',
                              size: 'sm',
                              flex: 5
                            }
                          ]
                        },
                        {
                          type: 'box',
                          layout: 'baseline',
                          spacing: 'sm',
                          contents: [
                            {
                              type: 'text',
                              text: '電話',
                              color: '#aaaaaa',
                              size: 'sm',
                              flex: 1
                            },
                            {
                              type: 'text',
                              text: Xindian[i].tel,
                              wrap: true,
                              color: '#666666',
                              size: 'sm',
                              flex: 5
                            }
                          ]
                        },
                        {
                          type: 'box',
                          layout: 'baseline',
                          contents: [
                            {
                              type: 'text',
                              text: '容納人數',
                              size: 'sm',
                              flex: 1,
                              color: '#aaaaaa'
                            },
                            {
                              type: 'text',
                              text: Xindian[i].avaliable,
                              flex: 3
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                footer: {
                  type: 'box',
                  layout: 'vertical',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'spacer',
                      size: 'sm'
                    }
                  ],
                  flex: 0
                }
              })
            }
            break
          }
        }
      }
    }
    if (Xindian.length > 0) {
      console.log(flex)
      event.reply(flex)
    }
    event.reply('找不到')
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
