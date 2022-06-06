import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleLg">Blog</span>
            <span className="headerTitleSm">Express yourself with words</span>
        </div>
        <img className="headerImage" src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg" alt="" />
    </div>
  )
}
