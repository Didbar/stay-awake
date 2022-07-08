import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const CoffeeStore = () => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Coffee Store {router.query.id}</title>
            </Head>
            Coffee Store <br />
            <Link href='/'>
                <a>Go Home</a>
            </Link>
        </div>
    )
}

export default CoffeeStore
