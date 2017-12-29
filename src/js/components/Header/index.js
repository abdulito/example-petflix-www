import React from "react"
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <svg className="align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 51.4">
                <path d="M12.2 0c1.8 0 3.3 0.4 4.5 1.2 1.2 0.8 2.2 1.9 2.9 3.2 0.7 1.3 1.3 2.8 1.6 4.5 0.3 1.7 0.5 3.4 0.5 5.1 0 2.4-0.3 4.5-0.8 6.4 -0.5 1.8-1.3 3.4-2.2 4.6 -1 1.2-2.1 2.2-3.5 3 -1.4 0.7-2.9 1.2-4.5 1.4 -1.2 0.2-2.5 0.3-3.7 0.5 0 6.6 0 13.3 0 19.9 -2.3 0.5-4.6 1-6.9 1.6C0 34.3 0 17.1 0 0 4.1 0 8.2 0 12.2 0zM10 22.2c1.4-0.1 2.5-0.8 3.4-2.1 0.9-1.2 1.3-3.1 1.3-5.6 0-2.4-0.4-4.3-1.1-5.5 -0.7-1.2-2-1.8-3.7-1.8 -1 0-1.9 0.1-2.9 0.1 0 5 0 10.1 0 15.1C8 22.4 9 22.3 10 22.2z" />
                <path d="M47.9 7.1c-4.1 0.1-8.3 0.2-12.4 0.3 0 3.5 0 7-0.1 10.5 3.9-0.2 7.8-0.4 11.7-0.6 0 2.4 0 4.8 0 7.2 -3.9 0.2-7.8 0.5-11.7 0.8 0 4 0 8-0.1 12 4.3-0.5 8.6-0.9 12.9-1.3 0 2.4 0 4.8 0 7.1 -6.6 0.7-13.3 1.6-19.9 2.6 0.1-15.3 0.1-30.5 0.2-45.8C35 0 41.5 0 47.9 0 47.9 2.4 47.9 4.8 47.9 7.1z" />
                <path d="M75.6 6.8c-2.5 0-5.1 0-7.6 0.1 0 11.6-0.1 23.2-0.1 34.8 -2.3 0.1-4.7 0.3-7 0.4C60.9 30.4 61 18.7 61 7 58.5 7 56 7 53.4 7.1c0-2.4 0-4.7 0-7.1 7.4 0 14.8 0 22.1 0C75.6 2.3 75.6 4.6 75.6 6.8z" />
                <path d="M101.4 0c0 2.3 0 4.6 0 6.9 -4.1 0-8.3 0-12.4 0 0 3.2 0 6.5 0 9.7 3.9 0 7.8 0 11.7 0.1 0 2.3 0 4.6 0 6.8 -3.9-0.1-7.8-0.1-11.7-0.2 0 6 0 11.9 0 17.9 -2.3 0-4.7 0-7 0 0-13.7 0-27.5 0-41.2C88.5 0 94.9 0 101.4 0z" />
                <path d="M107.9 0c2.3 0 4.7 0 7 0 0 11.8 0.1 23.5 0.1 35.3 4.1 0.3 8.3 0.6 12.4 1 0 2.4 0 4.8 0 7.2 -6.5-0.7-13-1.3-19.4-1.6C108 27.9 107.9 13.9 107.9 0z" />
                <path d="M134.1 0c2.3 0 4.7 0 7 0 0.1 15.1 0.2 30.2 0.2 45.2 -2.3-0.3-4.7-0.7-7-1C134.2 29.5 134.2 14.8 134.1 0z" />
                <path d="M155.9 0c1.5 5.2 3 10.4 4.5 15.7 1.5-5.1 2.9-10.4 4.4-15.7 2.5 0 5.1 0 7.6 0 -2.7 8.4-5.3 16.6-8 24.5 2.9 8.6 5.7 17.6 8.6 27 -2.6-0.6-5.2-1.2-7.8-1.8 -1.7-6-3.3-11.8-5-17.5 -1.6 5.3-3.2 10.4-4.9 15.5 -2.5-0.5-5.1-0.9-7.6-1.4 2.8-7.3 5.7-14.8 8.5-22.6 -2.7-8.1-5.4-16-8-23.6C150.8 0 153.3 0 155.9 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
