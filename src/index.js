import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { ResponsiveSunburst } from '@nivo/sunburst'


 
const App = () => {
  const [data, setData] = useState([])

  const ministryColor = (item) => {
    if(item === "内閣府") {
      return "hsl(20, 70%, 50%)"
    }
    if(item === "厚生労働省") {
      return "hsl(40, 70%, 50%)"
    }
    if(item === "国土交通省") {
      return "hsl(60, 70%, 50%)"
    }
    if(item === "外務省") {
      return "hsl(90, 70%, 50%)"
    }
    if(item === "復興庁") {
      return "hsl(120, 70%, 50%)"
    }
    if(item === "文部科学省") {
      return "hsl(160, 70%, 50%)"
    }
    if(item === "環境省") {
      return "hsl(240, 70%, 50%)"
    }
    if(item === "経済産業省") {
      return "hsl(200, 70%, 50%)"
    }
    if(item === "総務省") {
      return "hsl(180, 70%, 50%)"
    }
    if(item === "警察庁") {
      return "hsl(300, 70%, 50%)"
    }
    if(item === "防衛省") {
      return "hsl(360, 70%, 50%)"
    }
    if(item === "個人情報保護委員会") {
      return "hsl(350, 70%, 50%)"//"lightcoral"
    }
    if(item === "財務省") {
      return "hsl(220, 70%, 50%)"
    }
    if(item === "法務省") {
      return "hsl(45, 70%, 50%)"
    }
    if(item === "農林水産省") {
      return "hsl(140, 70%, 50%)"
    }
    if(item === "原子力規制委員会") {
      return "hsl(95, 20%, 60%)"
    }


  }

  useEffect(() => {
    window
      .fetch('data.json')
      .then((response) => response.json())
      .then((data) =>{
        const companies = new Set()
        for(const item of data) {
          companies.add(item.name)
        }

        const array =[]
        for(const company of companies) {
          const ministries = new Set()
          for(const item of data) {
            if(item.name === company) {
              ministries.add(item.ministry)
            }
          }
          console.log(ministries)

          const array2 = []
          for(const ministry of ministries) {
            const bureaus = new Set()
            for(const item of data) {
              if(item.ministry === ministry) {
                bureaus.add(item.bureau)
              }
            }
            const array3 = []
            for(const bureau of bureaus) {
              const departments = new Set()
              for(const item of data) {
                if(item.bureau === bureau) {
                  departments.add(item.department)
                }
              } 
              const array4 = []
              for(const department of departments) {
                let sum = 0
                for(const item of data)  {
                  if(item.name === company && item.ministry === ministry && item.bureau === bureau && item.department === department) {
                    sum += item.amount
             
                  }
                }
                array4.push({name:department, amount:sum})
              }
              array3.push({name:bureau,  children: array4})
            }
            array2.push({name:ministry, color:ministryColor(ministry), children:array3})
          }

          array.push({name:company,children:array2})

        }
        
        setData(array)
      })

  }, [])
  console.log(data)
  return (
    <>
        <section className="section">
          <div className="container">
            <div className="content has-text-centered">
              <h3>2019年度尾上ゼミ 情報科学講究1 課題制作</h3>
              <h1>タイトル</h1>
              <p>これはデータの説明です。</p>
              <p>これは可視化の説明です。</p>
              {
                data.map((data) => {
                  return(
                     <div style={{width: '600px', height: '600px'}} > 
                       <ResponsiveSunburst
                        data={data}
                        margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
                        identity="name"
                        value="amount"
                        cornerRadius={2}
                        borderWidth={1}
                        borderColor="white"
                        colors={(item) => item.color}
                        childColor={{ from: 'color', modifiers: [] }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        isInteractive={true}
                       />
                      </div>
                  )
                })
              }
              <p>これは可視化結果の考察です。</p>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>&copy;2020 上野瑞貴, 出口翼, 野村理紗</p>
          </div>
        </footer>
    </>
  )
}

render(<App />, document.querySelector('#content'))
