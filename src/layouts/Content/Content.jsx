import classNames from 'classnames'
import './Content.scss'

export default (props) => {
    const {children, isResetPaddingTop = false} = props

    return <main className={classNames('content', {
        'content--reset-padding-top':isResetPaddingTop
    })}>
      {children}
    </main>
}