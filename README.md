# NgRx-APM
	Redux
•	store

•	actions 

•	reducers

•	selector

•	effects

	store  
•	JS object,
•	In memory Database, client side ,
•	On Runtime ( remove on refresh),
•	has slices for each Feature or component 
       
	reducer 
•	one for each feature 
•	don't edit part of feature, replace all the feature 
•	take On function => event for actions
•	pure function => when takes the same parameters return the same output
•	without any side effect, 
•	without any  variable from out scope
•	must be sync 
•	can set multiple actions for the same event 
                                  
	Effects 

•	Effects isolate side effects from components, allowing for more pure components that select state and dispatch actions.
•	Effects are long-running services that listen to an observable of every action dispatched from the Store.
•	Effects filter those actions based on the type of action they are interested in. This is done by using an operator.
•	Effects perform tasks, which are synchronous or asynchronous and return a new action.
