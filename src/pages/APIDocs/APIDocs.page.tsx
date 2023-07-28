// @todo

import SwaggerUI from 'swagger-ui-react'
import { WidePageLayout } from '../../components/Layout/Page.layout'

const APIDocs = () => {
    // window.onload = function() {
    //   // Begin Swagger UI call region
    //   const ui = SwaggerUIBundle({
    //     //https://raw.githubusercontent.com/asuc-octo/octo-website/apidocs
    //     //window.location.protocol + '//' + window.location.host + 'assets/octo-api-website.yaml'
    //     url: window.location.protocol + '//' + window.location.host + '/assets/octo-api-website.yaml',
    //     //'https://raw.githubusercontent.com/asuc-octo/octo-website/apidocs/assets/octo-api-website.yaml',
    //     dom_id: '#swagger-ui',
    //     //deepLinking: true,

    //     presets: [
    //       SwaggerUIBundle.presets.apis,
    //       SwaggerUIStandalonePreset
    //     ],
    //     plugins: [
    //       SwaggerUIBundle.plugins.DownloadUrl
    //     ],
    //     layout: "BaseLayout"
    //   })
    //   // End Swagger UI call region

    //   window.ui = ui
    // }
    return (
        <WidePageLayout>
            <div id='alert_placeholder'></div>
            <div className='custom_description'>
                <h1>
                    OCTO API{' '}
                    <span className='badge badge-pill badge-secondary tw: text-[15px] align-middle'>
                        v1.0
                    </span>
                </h1>
                <p>
                    The OCTO API is a resource for student developers at
                    Berkeley to have access to the same data that backs Berkeley
                    Mobile, for the purpose of supporting student created
                    applications and research projects. Please use this free
                    resource fairly by not unnecessarily spamming the API and
                    crediting ASUC OCTO as the source. We do not provide
                    guarantees about the correctness of the data, but we do try
                    to maintain it to the best of our abilities. If you have any
                    questions or if you see something wrong, feel free to{' '}
                    <a href='mailto:octo.api@asuc.org'>email us</a>.
                </p>

                <h3> Getting Started </h3>
                <ol className='list'>
                    <h4>
                        <li>Getting your Tokens</li>
                        <br className='shift-signin' />
                        <button
                            id='signin'
                            className='btn btn-primary signin tw: font-medium h-10 justify-center'
                            onClick={() => {
                                {
                                    /** signIn */
                                }
                            }}
                        >
                            <img
                                src='assets/img/UC-Berkeley-Logo.png'
                                className='tw: w-[30px] mr-[15px] mt-[-2px]'
                                id='bear-icon'
                            />
                            <span
                                id='loading'
                                className='spinner-border spinner-border-sm tw: hidden mr-[26px] mt-[-2px]'
                            ></span>
                            Sign in with Berkeley
                        </button>
                    </h4>
                    <br className='shift-signin' />
                    <br className='shift-signin' />
                    <div className='desc-signin'>
                        You should receive an email with your refresh token and
                        access token that you will use to make requests to our
                        API.
                    </div>
                    <br />
                    <h4>
                        <li>Using your Access Token</li>
                    </h4>
                    For all of your API requests, pass your access token in your
                    request’s Authentication header as a Bearer Token. You can
                    read more about{' '}
                    <a href='https://jwt.io/introduction'>
                        JSON Web Tokens and the Bearer schema{' '}
                    </a>
                    . <br /> <br />
                    If you are using{' '}
                    <a href='https://www.postman.com'>Postman</a>, the
                    screenshot below shows how to use the token.
                    <br />
                    <br />
                    <img
                        src='assets/img/api-access.png'
                        className='tw: w-full'
                    />
                    <br />
                    <br />
                    <h4>
                        <li>Using your Refresh Token</li>
                    </h4>
                    Your access token is only valid for 2 days. To get a new
                    access token, make a <code>POST</code> request to our
                    refresh_token endpoint (listed under Authentication below).
                    Pass your refresh token in the <b>body</b> of your request
                    as JSON.
                    <br />
                    <br />
                    <img
                        src='assets/img/api-refresh.png'
                        className='tw: w-full'
                    />
                </ol>
                <br />
                <br />
                <br />
                <h3>API Documentation</h3>
            </div>
            <div id='swagger-ui'>
                <SwaggerUI spec='./api/api.yaml' />
            </div>
        </WidePageLayout>
    )
}

export default APIDocs
