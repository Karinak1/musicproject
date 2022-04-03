import React from 'react'

import{Container} from 'react-bootstrap'


const AuthURL = "https://accounts.spotify.com/authorize?client_id=6a477cd624b24995a4a23a15ad79a8fc&response_type=code&direct_url=http://localhost:3000&scope=streaming%20user-read-email%20user0read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user0modify-playback-state"

export default function Login() {
  return 
    <Container> <a className="Button" href={AuthURL}>Login</a></Container>

}

