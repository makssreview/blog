import React, {useContext} from 'react'
import {BlogItem} from '../../../components/BlogItem/BlogItem'
import {PostContext} from '../Context'
import {Search} from '../../../components/Search/Search'
import { Container, P, PostWrapper, H2} from './BlogeHome.style'

export const BlogHome = () => {
    const {searchTag, postsArray} = useContext(PostContext)

    const isFilter = Boolean(searchTag) ?? false
    const filteredArray = isFilter
        ? postsArray?.filter((el) => el.tags.includes(searchTag))
        : postsArray

    return (
        <Container>
            <Search/>
            <PostWrapper>
                {filteredArray.reverse().map((post) => (
                    <BlogItem post={post} key={post._id}/>
                ))}
            </PostWrapper>
        </Container>
    )
}

