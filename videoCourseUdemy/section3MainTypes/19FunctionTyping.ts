//Типізувати функцію

/* Запрос */
/*{
    "topicId": 5,
    "status": "published" // "draft", "deleted"
}*/
/* Ответ */
/*[
    {
        "question": "Как осуществляется доставка?",
        "answer": "быстро!",
        "tags": [
            "popular",
            "new"
        ],
        "likes": 3,
        "status": "published"
    }
]*/

/*
async function getFaqs(req) {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
*/

enum QuestionStatuses {
    Published = 'Published',
    Draft = 'Draft',
    Deleted = 'Deleted',
}

async function getFaqs(req: {
    topicId: number;
    status: QuestionStatuses;
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatuses;
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req),
    });
    const data = await res.json();
    return data;
}