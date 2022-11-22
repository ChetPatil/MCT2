import React from 'react'
function TextContainer(props) {
    const styling = {
      'fontFamily' : `${props.family}`,
      'fontSize' : `${props.size}px`,
      'color' : `${props.color}`
      }
  return (
    <>
    <div 
      className="pharagraph"
      style = {styling}
      >
        <div className="subPhara">
          <p>Est tenetur unde cum nulla unde est eius natus non consequatur blanditiis id reprehenderit eaque et magni excepturi 33 impedit odit. Aut consequuntur galisum et animi ullam sed pariatur culpa in iure quod aut vitae fuga in enim asperiores? Qui natus tempore qui beatae asperiores est iste omnis et eaque molestiae non beatae reiciendis. Cum voluptas perspiciatis rem officia dolorem ut expedita blanditiis.</p>
          <p>
          Nam nisi adipisci sed quasi fugit et nisi rerum. Est amet molestiae qui numquam totam aut cupiditate deleniti! Aut commodi voluptatem et natus consectetur non labore nobis et voluptatum debitis. Qui eaque quidem vel laborum dicta in maxime quisquam aut quidem deleniti et enim autem sed tenetur fuga.
          </p>
          <p>
          Lorem ipsum dolor sit amet. Sed recusandae consequatur sed impedit aperiam ut iure similique? Id veniam molestiae sit dolorem assumenda qui Quis consequatur ut beatae neque non suscipit officia. Ab quasi impedit ut fugiat distinctio qui praesentium excepturi.
          </p>
          <p>
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, 
            combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
            Lorem ipsum dolor sit amet. Ut rerum adipisci vel quam veniam in debitis quia aut suscipit quibusdam eos suscipit obcaecati. Ad expedita omnis ut fugiat voluptas qui sint porro ut dignissimos sapiente vel laboriosam autem 33 quisquam quae. Rem facere galisum in blanditiis delectus ea quia architecto rem numquam quibusdam ea debitis numquam. </p><p>Non minus recusandae ut itaque voluptas At quia labore eum blanditiis nulla vel recusandae assumenda. At praesentium rerum est recusandae ipsam rem porro maiores eum iusto placeat ex galisum vitae est velit 
          </p>
        </div>
      </div>
    </>
  )
}

export default TextContainer
