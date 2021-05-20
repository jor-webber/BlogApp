import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First Post',
                previewText: 'This is my first post',
                thumbnail:
                  'https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg',
              },
              {
                id: '2',
                title: 'Second Post',
                previewText: 'This is my second post',
                thumbnail:
                  'https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg',
              },
            ]);
            resolve();
          }, 1000)
        })
      },
      setPosts(context, posts) {
        context.commit('setPosts', posts);
      }
    },
      getters: {
        loadedPosts(state) {
          return state.loadedPosts;
        }
      }
    });
}

export default createStore;