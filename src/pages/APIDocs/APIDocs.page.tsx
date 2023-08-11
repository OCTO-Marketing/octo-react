// import SwaggerUI from 'swagger-ui-react'
import { WidePageLayout } from '../../components/Layout/Page.layout'
import { Columns, MdColumn } from '../../components/Layout/Columns.layout'

const APIDocs = () => {
    return (
        <WidePageLayout>
            <div className='custom_description'>
                <h1>
                    OCTO API{' '}
                    <span className='bg-slate-400 text-white py-0.5 px-2 rounded-full text-[15px] align-middle'>
                        v1.0
                    </span>
                </h1>
                <Columns>
                    <MdColumn grow>
                        <p>
                            The OCTO API is a resource for student developers at
                            Berkeley to have access to the same data that backs
                            Berkeley Mobile, for the purpose of supporting
                            student created applications and research projects.
                        </p>
                        <p>
                            The API Documentations are being updated at the
                            moment. Please check back later. If you need
                            immediate access, don't hesitate to reach out by{' '}
                            <a
                                className='text-accent'
                                href='mailto:technology@asuc.org'
                            >
                                emailing us
                            </a>
                            .
                        </p>
                    </MdColumn>
                </Columns>
            </div>
        </WidePageLayout>
    )
}

export default APIDocs
