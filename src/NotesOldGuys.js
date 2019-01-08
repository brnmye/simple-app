/*  Connect subscription for creates:::::::::
        <Connect
          //CREATE SUBSCRIPTION
          query={graphqlOperation(queries.listTodos)}
          subscription={graphqlOperation(subscriptions.onCreateTodo)}
          onSubscriptionMsg={(prev, { onCreateTodo }) => {
            let updatedQuery = Object.assign({}, prev);
            updatedQuery.listTodos.items = prev.listTodos.items.concat([
              onCreateTodo
            ]);
            this.handleQuery();
            return updatedQuery;
          }}
        >
          {({ data: { listTodos }, loading, error }) => {
            if (error) return <h3>Error</h3>;
            if (loading || !listTodos) return <h3>Loading...</h3>;
            //if (listTodos) return this.updateState(listTodos.items);
            return <ListView />;
            //return null;
          }}
        </Connect>
        */
