/**
Maximum Number of Events That Can Be Attended

LeetCode
55082
Jul 03, 2025
Editorial
Approach: Greedy
Intuition
According to the problem statement, meeting i starts on startDay 
i
​
  and ends on endDay 
i
​
 . You are allowed to attend a meeting on any day within the interval [startDay 
i
​
 ,endDay 
i
​
 ]. Since only one meeting can be attended per day, we apply a greedy strategy: if it's possible to attend both meetings i and j on day k, we should prioritize the one with the earlier end time, i.e., min(endDay 
i
​
 ,endDay 
j
​
 ). This ensures we leave more room to accommodate other meetings later.

Following this principle, we assume that the latest any meeting ends is maxDay. We can then iterate through each day from 1 to maxDay and greedily choose which meeting to attend on each day. To do this efficiently, we use a min-heap to keep track of the end times of currently available meetings. We also sort all meetings by their start time in advance.

Let the current day be i. At each day, we perform the following steps:

Add to the candidate queue (the min-heap) all meetings whose start day is less than or equal to i. At this point, the heap contains all meetings available to attend on day i or earlier.

Remove from the heap all meetings whose end day is less than i, as they can no longer be attended.

If the heap is not empty, we attend the meeting with the earliest end time (which is at the top of the heap), increment the count of attended meetings by 1, and remove it from the heap.

Finally, return the total number of meetings attended.
*/

var maxEvents = function (events) {
    const n = events.length;
    let maxDay = 0;
    for (const e of events) {
        maxDay = Math.max(maxDay, e[1]);
    }
    events.sort((a, b) => a[0] - b[0]);
    const pq = new MinPriorityQueue();
    let ans = 0;
    for (let i = 1, j = 0; i <= maxDay; i++) {
        while (j < n && events[j][0] <= i) {
            pq.enqueue(events[j][1]);
            j++;
        }
        while (!pq.isEmpty() && pq.front() < i) {
            pq.dequeue();
        }
        if (!pq.isEmpty()) {
            pq.dequeue();
            ans++;
        }
    }
    return ans;
};
