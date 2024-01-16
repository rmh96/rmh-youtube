Hello!!

Author: Harish RM

Created a Youtube clone with some advanced features of Youtube.

1. This React application is using actual Youtube's data
2. Implemented Redux toolkit to store all data to easily manipulate & use them wherever we need.
3. Used Tailwind css to style the application quickly & precisely.
4. Leaner & predictable pages build using react-router-dom
5. Advanced search with debouncing, and caching features
   - Debouncing will help to reduce the number of API calls made for each type press, like
     Normal key press api calls for "apj abdul kalam" - 15 API CALLS
     With Debouncing for the same letters - only 5 API CALLS
   - Search results will be stored in redux store, and if user press back in the search then new api calls will not be done, like
     Normally for "apj" - there might be 3 sets of results for "a", "ap" & "apj"
     now if user click back from apj to ap, then no new calls will be made, redux will give us the old cached results
6. Implemented Nested comment section similar to reddit in Watch page, where user can dynamically type the comments continously in a nested manner.
7. Implemented Live chat section with random names & content generator, and running in a loop similar to Youtube live chat.
   - User can entry their own chat
   - Random chats will be populating continously without any lacks or break in the application similar to youtube.
