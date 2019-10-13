import { ACTION_GET_POSTS } from "../actionTypes/actionTypes";

export const getAllPosts = () => {

    return {
        type: ACTION_GET_POSTS,
        payload: [
            {
                "id": "487929f5-47bc-47af-864a-f570d2523f3e",
                "title": "support",
                "content": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
                "datetime": "1478674102",
        
                "author": "Valaria Claypool"
            },
            {
                "id": "92751d44-4a2c-4902-9673-07b9f94a6ee5",
                "title": "Versatile",
                "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
                "datetime": "1476433347",
        
                "author": "Miltie McLachlan"
            },
            {
                "id": "bfa0f435-8c17-4897-b5cd-eaf61f2c313e",
                "title": "Persistent",
                "content": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                "datetime": "1484491890",
        
                "author": "Emmett Brambill"
            }
        ]
    }
};