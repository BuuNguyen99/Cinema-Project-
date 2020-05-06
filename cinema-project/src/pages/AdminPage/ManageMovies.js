import React from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { actFetchDataMovieRequest } from "../../actions/action";
import {
	actUpdateMovieRequest,
	actDeleteMovieRequest,
	actAddMovieRequest,
} from "../../actions/action";
import TableCustom from "../../components/Table/TableCustom";
import PopupMovie from "../../components/Popup/PopupMovie";
import PopupComfirm from "../../components/Popup/Popup";
import { useEffect, useState } from "react";
const ManageMovies = ({
	onFetchDataMovie,
	movie,
	onAddMovie,
  onDeleteMovie,
  onUpdateMovie
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenConfirm, setIsOpenConfirm] = useState(false);
	const [id, setId] = useState("");
	const [formState, setFormState] = useState({});
	useEffect(() => {
		onFetchDataMovie();
		setFormState(movie);
	}, []);

	const confirmInform = () => {
		console.log("a");
		//createBooking(infoMovie);
		setIsOpen(!isOpen);
	};
	const handleOnClose = () => {
		setFormState({});
		setIsOpen(!isOpen);
	};

	const handleChange = (e) => {
		e.persist();
		setFormState((formState) => ({
			...formState,
			[e.target.name]: e.target.value,
		}));
	};

	const confirmMovie = () => {
		if(!formState.id) {
      onAddMovie(formState);
    } else {
      onUpdateMovie(formState)
    }
		setIsOpen(!isOpen);
	};

	const confirmDelete = () => {
		onDeleteMovie(id);
		setIsOpenConfirm(!isOpenConfirm);
	};

	const handleOpenpopupDelete = (id) => {
		setId(id);
		setIsOpenConfirm(!isOpenConfirm);
  };
  const handleOpenpopupEdit = (value) => {
    console.log('value:', value)
    setId(value.id);
    setFormState(value)
    setIsOpen(!isOpen)
  }

	console.log("formState:", formState);
	return (
		<div className='container-fluid my-4'>
			<TableCustom
				handleOpenpopup={() => setIsOpen(!isOpen)}
        handleOpenpopupDelete={handleOpenpopupDelete}
        handleOpenpopupEdit={handleOpenpopupEdit}
				movie={movie}></TableCustom>

			<PopupMovie
				open={isOpen}
				handleOnClose={handleOnClose}
				handleChange={handleChange}
				formState={formState}
				onComfirm={confirmMovie}></PopupMovie>
			<PopupComfirm
				open={isOpenConfirm}
				onClose={() => setIsOpenConfirm(!isOpenConfirm)}
				onComfirm={confirmDelete}
			/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		users: state.reducerUsers.users,
		movie: state.reducerMovie.movie,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchDataMovie: () => {
			dispatch(actFetchDataMovieRequest());
		},
		onUpdateMovie: (movie) => {
			dispatch(actUpdateMovieRequest(movie));
		},
		onDeleteMovie: (id) => {
			dispatch(actDeleteMovieRequest(id));
		},
		onAddMovie: (movie) => {
			dispatch(actAddMovieRequest(movie));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageMovies);
