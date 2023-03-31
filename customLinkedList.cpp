/*
 customLinkedList.cpp
	- Customized linked list
	- Able to push to front or back of list
	- Can delete elements by value
*/

#include <iostream>
#include <algorithm>
#include <vector>
#include <iterator>
using namespace std;


/*
 Nodes to be added to linked list
 Each node has a (int) value, and a pointer to the next node link in list
*/
class Node {
private:
	int m_val = 0;
	Node* m_next = nullptr;
	
public:
	Node(int v, Node* n = nullptr) : m_val(v), m_next(n) { }
	~Node() { }
	int value() { return m_val; }
	Node* next() { return m_next; }
	void next(Node* n) { m_next = n; }
};



/*
 List of nodes connected to each other using a link
*/
class LinkedList {
private:
	Node* m_head = nullptr;
	Node* m_tail = nullptr;
	
public:
	LinkedList() {};
	~LinkedList() {};

	Node* head() { return m_head; }
	Node* tail() { return m_tail; }
	
	/* Push to front of list */
	void push_front(Node* node) {
		if (m_head == nullptr) {
			m_head = node;
			m_tail = node;
		}
		else {
			node->next(m_head); 
			m_head = node;
		}
	}

	/* Push to back of list */
	void push_back(Node* node) {
		if (m_head == nullptr) {
			m_head = node;
			m_tail = node;
		}
		else {
			m_tail->next(node);
			m_tail = node;
		}
	}
	
	/* Print list as a comma separated string to elements */
	void print_list() {
		Node* temp_head = m_head;
		std::vector<int> elems = {};
		while (temp_head != nullptr) {
			elems.insert(elems.begin(), temp_head->value()); // push front
			temp_head = temp_head->next();
		}
		std::copy(elems.begin(), elems.end(), std::ostream_iterator<int>(std::cout, ","));
		std::cout << std::endl;
	}

	/* Delete one (or none) elements matching value provided in argument */
	void find_and_delete_val(int v) {
		Node* ptr  = m_head;
		Node* prev = m_head;
	
		while(ptr->next() != nullptr) {
			if (ptr->value() == v) {

				if (m_head == m_tail) { // 1 elem in list
					std::cout << "Head and tail at 1st elem: " << m_head->value() << std::endl;
					m_head = nullptr;
					m_tail = nullptr;
				}
				else if (ptr == m_head) { // removing 1st elem
					std::cout << "Removing elem at head: " << ptr->value() << std::endl;
					m_head = m_head->next();
					ptr->next(nullptr);
				}
				else if (ptr == m_tail) { // removing last elem
					std::cout << "Removing elem at tail: " << ptr->value() << std::endl;
					m_tail = prev;
					m_tail->next(nullptr);
				}
				else {
					std::cout << "Removing elem at ith elem: " << ptr->value() << std::endl;
					prev->next(ptr->next());
					ptr = nullptr;
				}
				
				return;
			}

			prev = ptr;
			ptr = ptr->next();
		}
	}
};

int main() {
	// [1, 2, 3, 4]
	// push_front -> 1, 2, 3, 4
	// push_back  -> 4, 3, 2, 1
	Node* node1 = new Node(1);
	Node* node2 = new Node(2);
	Node* node3 = new Node(3);
	Node* node4 = new Node(4);

	LinkedList list;
	list.push_front(node1);
	list.push_front(node2);
	list.push_front(node3);
	list.push_front(node4);

	std::cout << "Head val: " << list.head()->value() << std::endl;
	std::cout << "Tail val: " << list.tail()->value() << std::endl;

	list.print_list();
	list.find_and_delete_val(4);
	list.print_list();

	delete node1;
	delete node2;
	delete node3;
	delete node4;

	return 0;
}

