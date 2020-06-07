export const getLists = (user) => {
    return $.ajax({
        method: 'GET',
        url: '/api/lists',
        data: {
            user_id: user.id,
        }
    });      
};

export const getList = id => {
   
    return $.ajax({
        method: 'GET',
        url: `api/lists/${id}`,
        
    });
};

export const createList = list => {
 
    return $.ajax({
        method: 'POST',
        url: `api/lists`,
        data: {
            list
        }
    });
};

export const updateList = list => {
    return $.ajax({
        method: 'PATCH',
        url: `api/lists/${list.id}`,
        data: {
            list
        }
    });
};

export const deleteList = list => {
    
    return $.ajax({
        method: 'DELETE',
        url: `api/lists/${list.id}`,
        data: {
            list
        }
        
    });
};

