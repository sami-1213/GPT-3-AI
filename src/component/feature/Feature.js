import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='gpt_features-contain_feature'>
      <div className='gpt_features-contain-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt_features-contain-txt">
        <p>{text}</p>
      </div>
    </div>
  )
}
export default Feature